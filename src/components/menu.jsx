import './menu.module.css'


export const Menu = (prosps) => {
    return(
        <nav className="menu">
        <p><a href="#s1">{prosps.s1}</a></p>
        <p><a href="#s2">{prosps.s2}</a></p>
        <p><a href="#s3">{prosps.s3}</a></p>
      </nav>
    )
}