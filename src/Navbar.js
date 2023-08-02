import React from "react";

class Navbar extends React.Component{

    render(){
        return(
            <>
                <div style={styles.nav}>
                    <div style={styles.title}>Movie-App</div>
                    <div style={styles.cartIconContainer}>
                        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="Cart Icon"/>
                        <span style={styles.cartCount}>0</span>
                    </div>
                </div>
            </>
        )
    }
}


 
const styles = {
    nav:{width: '100%' ,
     height:'70px',
     backgroundColor :'red',
     display: 'flex',
     justifyContent: 'space-between'},

     title:{
        fontSize:'30',
        color:'white',
        fontWeight:'600',
        textTransform:'uppercase',
        marginLeft:'20',
        fontFamily:'Montserrat,sans-serif'
     },
     cartIconContainer: {
        position: "relative",
        cursor: "pointer",
      },
      cartCount: {
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right: 10,
        top: -5,
        fontSize: 12,
      },
      cartIcon: {
        height: 48,
        marginRight: 20,
      }
    
}

export default Navbar;