/**
 * WhatsApp Notification Utility
 *
 * Sends order notifications via:
 * 1. WhatsApp Cloud API (Meta) - if WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID are set
 * 2. wa.me link - included in admin email for manual send when API not configured
 */

/**
 * Send WhatsApp message via Meta Cloud API
 * @param {string} to - Phone number (10 digits, no country code)
 * @param {string} message - Text message
 * @returns {Promise<boolean>}
 */
async function sendViaMetaApi(to, message) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneId) return false;

  try {
    const phone = to.replace(/\D/g, "");
    const toNumber = phone.length === 10 ? `91${phone}` : phone.startsWith("91") ? phone : `91${phone}`;

    const res = await fetch(`https://graph.facebook.com/v18.0/${phoneId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: toNumber,
        type: "text",
        text: { body: message },
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("WhatsApp API error:", err);
      return false;
    }
    return true;
  } catch (error) {
    console.error("WhatsApp API send error:", error);
    return false;
  }
}

/**
 * Generate wa.me link - opens WhatsApp with pre-filled message (for manual send)
 * @param {string} mobileNumber - 10-digit mobile
 * @param {string} message - Pre-filled message
 * @returns {string} - wa.me URL
 */
export function getWhatsAppLink(mobileNumber, message) {
  const phone = mobileNumber.replace(/\D/g, "");
  const num = phone.length === 10 ? `91${phone}` : phone.startsWith("91") ? phone : `91${phone}`;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/**
 * Send WhatsApp notification for new order
 * @param {Object} order - Order object with order details
 * @param {string} mobileNumber - Customer mobile (10 digits)
 * @param {string} [adminMobile] - Admin mobile for "send to admin" notification
 * @returns {Promise<boolean>}
 */
export async function sendOrderNotification(order, mobileNumber, adminMobile) {
  const message = formatOrderMessage(order);

  // Try to send to customer via API
  const sentToCustomer = await sendViaMetaApi(mobileNumber, message);
  if (sentToCustomer) {
    console.log("WhatsApp sent to customer:", mobileNumber);
  }

  // Send to admin if number provided
  if (adminMobile) {
    const adminMsg = `🛒 *New Order #${order.order_number}*\n\n` + message;
    const sentToAdmin = await sendViaMetaApi(adminMobile, adminMsg);
    if (sentToAdmin) {
      console.log("WhatsApp sent to admin:", adminMobile);
    }
  }

  // Return true if at least one sent, or return wa.me link for email fallback
  return sentToCustomer || !!adminMobile;
}

/**
 * Format order details into a WhatsApp message (exported for wa.me link)
 */
export function formatOrderMessage(order) {
  let message = `🍳 *New Order Received!*\n\n`;
  message += `*Order ID:* #${order.order_number || order.id}\n`;
  message += `*Mobile:* ${order.mobile}\n`;

  if (order.email) {
    message += `*Email:* ${order.email}\n`;
  }

  if (order.address) {
    message += `*Address:* ${order.address}\n`;
  }

  message += `\n*Items:*\n`;
  (order.items || []).forEach((item, index) => {
    const name = item.product_name || item.name || "Product";
    const qty = item.quantity || 1;
    const price = item.price || 0;
    message += `${index + 1}. ${name} - Qty: ${qty} × ₹${price}\n`;
  });

  message += `\n*Total Amount:* ₹${Number(order.total || 0).toFixed(2)}\n`;
  message += `*Status:* ${order.status || "pending"}\n`;
  message += `*Date:* ${new Date().toLocaleString("en-IN")}\n\n`;
  message += `Thank you for your order! 🙏`;

  return message;
}

/**
 * Send order confirmation to customer
 */
export async function sendOrderConfirmation(order, mobileNumber) {
  const message =
    `✅ *Order Confirmed!*\n\n` +
    `Your order #${order.order_number || order.id} has been confirmed.\n` +
    `Total: ₹${Number(order.total || 0).toFixed(2)}\n` +
    `We'll notify you once your order is ready for delivery.\n\n` +
    `Thank you for shopping with us! 🥚`;

  return sendViaMetaApi(mobileNumber, message);
}
