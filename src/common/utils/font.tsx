type fonte = {children: React.ReactNode}

function Font(props: fonte) {
    return (
        <div>
            <head>
                {/** Links para que a fonte do site funcione, nota-se que os pesos da fonte também estão no link */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            {props.children}
        </div>
    )
}

export default Font;