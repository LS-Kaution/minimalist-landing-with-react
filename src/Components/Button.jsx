export default function Button({ link, color, animation, children }) {
    const colors = {
        discord: 'hover:text-[#9CA5FF] hover:border-[#9CA5FF]', 
        tiktok: 'hover:text-[#FF5C5C] hover:border-[#FF5C5C]',
        twitter: 'hover:text-[#4cbde0c4] hover:border-[#4cbde0c4]',
        twitch: 'hover:text-[#9361FF] hover:border-[#9361FF]',
        patreon: 'hover:text-[#FA7C34] hover:border-[#FA7C34]',
        throne: 'hover:text-[#5A4DF7] hover:border-[#5A4DF7]',
        coaching: 'hover:text-[#C89B3C] hover:border-[#C89B3C]'
    }
    const animate = {
        button1: 'animate-buttonsVisible',
        button2: 'animate-[buttonsVisible_2s_ease]',
        button3: 'animate-[buttonsVisible_2.5s_ease]',
        button4: 'animate-[buttonsVisible_3s_ease]',
        button5: 'animate-[buttonsVisible_3.5s_ease]',
        button6: 'animate-[buttonsVisible_4s_ease]',
        button7: 'animate-[buttonsVisible_4.5s_ease]'
    }
    return (
        <li className={`${animate[animation]}`}>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-center
                items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic
                text-[#423636] leading-10 transition duration-300 hover:scale-110 ${colors[color]} group`}
            >
                {children}
            </a>
        </li>
    )
}