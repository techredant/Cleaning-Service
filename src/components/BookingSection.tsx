import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <section id="book" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Book Your Service Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the form below and receive quotes from verified service providers in your area.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-elevated p-6 md:p-10 animate-fade-up">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
