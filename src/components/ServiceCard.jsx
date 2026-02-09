const ServiceCard = ({ Icon, children }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0 w-12 h-12 bg-gold bg-opacity-10 rounded-lg flex items-center justify-center">
            <Icon className="text-2xl text-gold" />
          </div>
        )}
        {children}
      </div>
    </article>
  );
};

export default ServiceCard;


