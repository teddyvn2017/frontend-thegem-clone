type Props = {
    title: string;
    backgroundImage: string;
    filters: React.ReactNode; // Sidebar
    products: React.ReactNode; // Main content
  };
  
  export default function CategoryTemplate({ title, backgroundImage, filters, products }: Props) {
    return (
        <div>
            <section
                className="text-white p-12"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="mt-2 text-lg">Always Fresh And Tasty</p>
            </section>
    
            <div className="flex gap-6 p-6">
                <aside className="w-1/4">{filters}</aside>
                <main className="flex-1">{products}</main>
            </div>
        </div>
    );
  }
  