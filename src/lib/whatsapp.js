/**
 * WhatsApp Notification Utility
 * 
 * This file contains the structure for sending WhatsApp notifications.
 * The actual implementation will be added based on the flow you'll explain.
 * 
 * Options for WhatsApp integration:
 * 1. WhatsApp Business API
 * 2. Twilio WhatsApp API
 * 3. WhatsApp Web API (using libraries like whatsapp-web.js)
 * 4. Custom WhatsApp integration service
 */

/**
 * Send WhatsApp notification for new order
 * @param {Object} order - Order object with order details
 * @param {string} mobileNumber - Customer mobile number (with country code)
 * @returns {Promise<boolean>} - Returns true if notification sent successfully
 */
export async function sendOrderNotification(order, mobileNumber) {
  try {
    // Format the order message
    const message = formatOrderMessage(order);
    
    // TODO: Implement the actual WhatsApp sending logic
    // This will depend on which service/method you choose:
    // 
    // Example with Twilio:
    // const twilio = require('twilio');
    // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    // await client.messages.create({
    //   from: 'whatsapp:+14155238886',
    //   to: `whatsapp:+91${mobileNumber}`,
    //   body: message
    // });
    //
    // Example with WhatsApp Business API:
    // const axios = require('axios');
    // await axios.post('https://graph.facebook.com/v13.0/{phone-number-id}/messages', {
    //   messaging_product: 'whatsapp',
    //   to: mobileNumber,
    //   type: 'text',
    //   text: { body: message }
    // }, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`
    //   }
    // });

    console.log('WhatsApp notification (to be implemented):');
    console.log('To:', mobileNumber);
    console.log('Message:', message);
    
    // For now, return true (you'll implement the actual sending later)
    return true;
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return false;
  }
}

/**
 * Format order details into a WhatsApp message
 * @param {Object} order - Order object
 * @returns {string} - Formatted message
 */
function formatOrderMessage(order) {
  let message = `🍳 *New Order Received!*\n\n`;
  message += `*Order ID:* #${order.id}\n`;
  message += `*Mobile:* ${order.mobile}\n`;
  
  if (order.email) {
    message += `*Email:* ${order.email}\n`;
  }
  
  if (order.address) {
    message += `*Address:* ${order.address}\n`;
  }
  
  message += `\n*Items:*\n`;
  order.items.forEach((item, index) => {
    message += `${index + 1}. ${item.product_name} - Qty: ${item.quantity} × ₹${item.price}\n`;
  });
  
  message += `\n*Total Amount:* ₹${order.total.toFixed(2)}\n`;
  message += `*Status:* ${order.status}\n`;
  message += `*Date:* ${new Date().toLocaleString('en-IN')}\n\n`;
  message += `Thank you for your order! 🙏`;
  
  return message;
}

/**
 * Send order confirmation to customer
 * @param {Object} order - Order object
 * @param {string} mobileNumber - Customer mobile number
 * @returns {Promise<boolean>}
 */
export async function sendOrderConfirmation(order, mobileNumber) {
  try {
    const message = `✅ *Order Confirmed!*\n\n` +
      `Your order #${order.id} has been confirmed.\n` +
      `Total: ₹${order.total.toFixed(2)}\n` +
      `We'll notify you once your order is ready for delivery.\n\n` +
      `Thank you for shopping with us! 🥚`;
    
    // TODO: Implement actual sending
    console.log('Order confirmation (to be implemented):', mobileNumber, message);
    
    return true;
  } catch (error) {
    console.error('Error sending order confirmation:', error);
    return false;
  }
}
