type Props = {
    backgroundImage: string;
    title: string;
    children: React.ReactNode;
};

export default function CategoryTemplate({ backgroundImage, title, children }: Props) {
    return (
        <div>
            <section style={{ backgroundImage: `url(${backgroundImage})` }} className="...">
                <h1>{title}</h1>
            </section>

            <div className="flex gap-6">
                <aside className="w-1/4">{/* sidebar */}</aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
