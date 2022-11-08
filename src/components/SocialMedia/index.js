import './socialmedia.css'
export function SocialMedia({ children, url }) {
    return(
        <a className='social' href={url} rel='noopener noreferrer' target='_blank'>
            {children}
        </a>
    )
}