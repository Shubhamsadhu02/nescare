import React from 'react'
import { Link} from 'react-router-dom'
import { Navbar, Offcanvas, Nav, Container, NavDropdown } from "react-bootstrap";
import '../Styles/Header.scss';



export default function header(props) {
    const showNav = props.showNav ?? true;
    const isWhite = props.isWhite ?? false;
    const ContactNav = props.ContactNav ?? false;
    const menuItems = [
        {
            title: 'Products',
            link: '/product',
            children: [
                {
                    "menu-item-type": "header-list",
                    header: "Logistics Management",
                    list_items: [
                        {
                            title: 'NES Platform',
                            link: '/nes-platform',
                        },
                        {
                            title: 'Customs',
                            link: '/customs',
                        },
                        {
                            title: 'Visiblity',
                            link: '/visibility',
                        }
                    ]
                },
                {
                    "menu-item-type": "header-list",
                    header: "Transportation",
                    list_items: [
                        {
                            title: 'Air Freight',
                            link: '/air-freight',
                        },
                        {
                            title: 'Air Charters',
                            link: '/project-air-and-ocean-charters',
                        },
                        {
                            title: 'Ocean Freight',
                            link: '/ocean-freight',
                        }
                    ]
                },
                {
                    "menu-item-type": "header-list",
                    header: "Trade Management",
                    list_items: [
                        {
                            title: 'Trade Finance',
                            link: '/trade-finance',
                        },
                        {
                            title: 'Product Classifications',
                            link: '/product-classification',
                        },
                        {
                            title: 'Cargo Insurance',
                            link: '/cargo-insurance',
                        },
                        {
                            title: 'Trade Advisory',
                            link: '/trade-advisory',
                        }
                    ]
                },
            ]
        },
        {
            title: 'Resources',
            link: '/resources',
            children: [
                {
                    "menu-item-type": "list",
                    list_items: [
                        {
                            title: 'Blog',
                            link: '/blog',
                        },
                        {
                            title: 'Help Center',
                            link: '/faq',
                        },
                        {
                            title: 'Glossary',
                            link: '/glossary',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Company',
            link: '/company',
            children: [
                {
                    "menu-item-type": "list",
                    list_items: [
                        {
                            title: 'About Us',
                            link: '/about-us',
                        },
                        {
                            title: 'Nescare',
                            link: '/nescare',
                            // link: 'http://www.nescare.in',
                            // is_absolute: true,
                        },
                        {
                            title: 'Contact Us',
                            link: '/contact-us',
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <>
            <Navbar key='md' expand='md' variant={isWhite ? 'dark' : 'light'} style={{ background: isWhite ? '#10243E' : '#FFFFFF' }}>
                <Container>
                    <Navbar.Brand href="/"><img src={"/images/Home/nescarelogo.svg"}
                        height={20} width={150} alt="Brand logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                        className="activewhite"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {showNav ?
                                <Nav className="nav-bar justify-content-center flex-grow-1 align-items-center pe-3">
                                    {
                                        menuItems.map(item => {
                                            if (item.children) {
                                                return <NavDropdown
                                                    title={item.title}
                                                    id={`offcanvasNavbarDropdown-expand-md`}                                                    
                                                >
                                                    <div className="nav-dropdown-box d-flex">

                                                        {
                                                            item.children.map((dropdown) => {
                                                                return getSubMenu(dropdown, item["link"])                                                               
                                                            })
                                                        }
                                                    </div>

                                                </NavDropdown>
                                            }                                            
                                        })                                    
                                    }
                                </Nav> : ""}
                            {showNav ?
                                <div className="search-nav">
                                    <ul>
                                        <li>
                                            <a href='#'><i class="far fa-search"
                                                style={{ color: isWhite ? "#E6E5E5" : '#0060BE' }}></i></a>
                                        </li>
                                        <li>
                                            {/* <a href='https://sam02-kumar02.wistia.com/medias/3n7gwp1ut0?wtime=0s' target={"_blank"}><button type='submit'>Introduction</button></a> */}
                                            <Link to='#'><button type='submit'>Introduction</button></Link>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <div className="d-flex justify-content-end flex-grow-1 search-nav align-items-center">
                                    <div className="nesacre-header">
                                        <Link to={'https://nesglobal.in/'} target="__blank" style={{ color: isWhite ? "rgba(255,255,255,.55)" : "rgba(0,0,0,.55)" }}>Nesglobal
                                            <img src='/images/Home/Arrow - Right.svg' height={18} width={18} alt='' style={{ filter: isWhite ? "invert(1)" : "invert(0)" }} /></Link>
                                    </div>
                                    <ul>
                                        <li>
                                            {ContactNav? <Link to='/carboncalculator'><button type='submit' className='carbon-cal__btn' >Carbon Calculator</button></Link>: ""}
                                        </li>
                                        <li>
                                            <Link to='/contact-us'><button type='submit' className='contact-btn'>Contact us</button></Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

function getSubMenu(dropdown, parent_link) {
    if (dropdown["menu-item-type"] === "header-list") {
        return <div className='nav-dropdown-content'>
            <h6>{dropdown["header"]}</h6>
            <ul style={{ padding: '0px' }}>
                {
                    dropdown["list_items"].map(item => <li key={item.title}><Link to={parent_link + item.link} className="nav-list-name">{item.title}</Link></li>)
                }
            </ul>
        </div>
    } else {
        return <div className='nav-dropdown-content'>
            <ul style={{ padding: '0px' }}>
                {
                    dropdown["list_items"].map(item => {
                        if(!Object.hasOwn(item,'is_absolute')){
                            return <li key={item.title}><Link to={parent_link + item.link} className="nav-list-name">{item.title}</Link></li>
                        }else{
                            return <li key={item.title}><a href={item.link} className="nav-list-name" target="_blank">{item.title}</a></li>
                        } 
                        
                    })
                }
            </ul>
        </div>
    }
}