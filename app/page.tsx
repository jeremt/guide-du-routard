import Link from "next/link";

// 0. Structure projet next
// 1. Créer des pages
// 2. Utiliser les liens

export default function Home() {
    return (
        <div className="m-auto p-4">
            <h1 className="text-2xl">Welcome to my guide du routard</h1>
            <p>There are a lot of routes here...</p>
            <div className="flex flex-col gap-2 p-4">
                <Link href="/departure" className="text-pink-300">
                    Go to departure
                </Link>
                <a target="_blank" href="https://github.com/jeremt/guide-du-routard" className="text-pink-300">
                    Go to github
                </a>
            </div>
        </div>
    );
}
