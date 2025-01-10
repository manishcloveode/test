'use client'



type Category = {
    name: string
    href: string
}

const categories: Category[] = [
    {
        name: "E-Commerce",
        href: "/e-commerce"
    },
    {
        name: "Healthcare",
        href: "/health-care"
    },
    {
        name: "Edtech",
        href: "/education-tech"
    },
    {
        name: "Government Bodies",
        href: "/government-bodies"
    },
    {
        name: "Real Estates",
        href: "/real-estate"
    },
    {
        name: "Marketing",
        href: "/marketing"
    },

    {
        name: "Coustmers Support",
        href: "/customer-support"
    },
    {
        name: "Sales Team",
        href: "/sales"
    }
]

export default function WabaisInterface() {
    return (
        <div className=" py-16 bg-[#e6f3f5]  flex items-center justify-center font-sofia p-4">
            <div className="w-full max-w-4xl border-2 border-[#024430] rounded-xl p-4">
                <div className="text-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href={category.href}
                                className="w-full text-white text-lg font-bold rounded-xl text-bold bg-[#024430]  p-2 text-center block"
                            >
                                {category.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
