
    interface PaginaProps {
        externa?: boolean
        children: any
        clasName?: string
    }

    export default function Pagina(props: PaginaProps) {
        return (
            <div className={`
            flex flex-col min-h-screen
            bg-gradient-to-r from-zinc-900 via-black to-zinc-900
            ${props.clasName ?? ''}
      
            `}>
            {props.children}
   
            </div>
        )
    }