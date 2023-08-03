import React from "react";
import styled from "styled-components";


// CSS Module
import styles from './Navbar.module.css';

// Styled component
const Nav = styled.div`
    width: 100% ;
     height:70px;
     background :linear-gradient(170deg,#1bc059,#0d47a1);
     display:flex;
     justify-content:space-between;`

const Title = styled.div`
        font-size:50px;
        color: white;
        font-weight:600;
        text-transform:uppercase;
        margin-left:20px;
        font-family:Montserrat,sans-serif;
        &:hover{color:#0f0}
`
const CartImg = styled.img`
height: 48px;
margin-right: 20px;
`
const CartIconContainer = styled.div`
position: relative;
cursor: pointer;
`
const CartCount = styled.span`
        background: ${(props)=>props.color};
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right: 10px;
        top: -5px;
        font-size: 12px;
        
        visibility:${(props)=> props.show?"visible":"hidden"};
`
class Navbar extends React.Component{

    render(){
        // this contains cartCount
        console.log(this.props);
        let { cartCount } = this.props;
        return(
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>Movie-App</div>
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartImg} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        <span className={styles.cartCount} color="yellow" show={true}>{cartCount}</span>
                    </div>
                </div>
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