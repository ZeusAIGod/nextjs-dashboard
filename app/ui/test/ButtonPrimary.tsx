export default function ButtonPrimary({ children }: { children: React.ReactNode }) {
    return (
        <button
            className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-orange-500 hover:shadow-lg hover:shadow-orange-500 transition-all outline-none"
        >
            {children}
        </button>
    );
  }