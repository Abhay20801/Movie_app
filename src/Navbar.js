import React from "react";
import styled from "styled-components";

// Styled component
const Nav = styled.div`
    width: 100% ;
     height:70px;
     background :linear-gradient(170deg,#1bc059,#0d47a1);
     display:flex;
     justify-content:space-between;`

const Title = styled.div`
        fontSize:30px;
        color: white;
        fontWeight:600;
        textTransform:uppercase;
        marginLeft:20px;
        fontFamily:Montserrat,sans-serif;
`
const CartImg = styled.img`
height: 48px,
margin-right: 20px,
`
const CartIconContainer = styled.div`
position: relative;
cursor: pointer;
`
const CartCount = styled.span`
        background: orange;
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right: 10px;
        top: -5px;
        fontSize: 12px;
`
class Navbar extends React.Component{

    render(){
        return(
            <>
                <Nav>
                    <Title>Movie-App</Title>
                    <CartIconContainer>
                        <CartImg src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        <CartCount>0</CartCount>
                    </CartIconContainer>
                </Nav>
            </>
        )
    }
}


 
// const styles = {
//     // nav:{width: '100%' ,
//     //  height:'70px',
//     //  backgroundColor :'red',
//     //  display: 'flex',
//     //  justifyContent: 'space-between'},

//      title:{
//         fontSize:'30',
//         color:'white',
//         fontWeight:'600',
//         textTransform:'uppercase',
//         marginLeft:'20',
//         fontFamily:'Montserrat,sans-serif'
//      },
//      cartIconContainer: {
//         position: "relative",
//         cursor: "pointer",
//       },
//       cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//       },
//       cartIcon: {
//         height: 48,
//         marginRight: 20,
//       }
    
// }

export default Navbar;