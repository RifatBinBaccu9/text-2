
const Faq = () =>{
    return(
        <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">How can I track my order?</h3>
            <p className="text-sm text-gray-600">
              Go to "My Orders" section from your account dashboard to track your orders in real-time.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">What is the return policy?</h3>
            <p className="text-sm text-gray-600">
              You can return any product within 7 days of delivery if it meets our return policy.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">How to contact customer support?</h3>
            <p className="text-sm text-gray-600">
              You can call us, send an email, or use our live chat option shown above.
            </p>
          </div>
        </div>
      </div>
    )
}
export default Faq;