export default function Header({logo})
{
return(
    <header id="header">
       <h1>Investment Calculator</h1>
       <img src={logo} alt="Investment Calculator Logo" />
    </header>
);
}