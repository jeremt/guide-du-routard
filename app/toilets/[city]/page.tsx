function getEmojiForCity(city: string) {
    if (city === "paris") {
        return "💩";
    }
    if (city === "lyon") {
        return "🦁";
    }
    return "🦭";
}

export default async function Page({params}: {params: Promise<{city: string}>}) {
    const {city} = await params;
    return (
        <div>
            {getEmojiForCity(city)} {city}
        </div>
    );
}
