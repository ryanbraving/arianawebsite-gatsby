import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'
import {FaFacebook, FaInstagram, FaTelegram, FaYoutube} from 'react-icons/fa'

export default class Footer extends Component {
    state = {
        icons: [
          { id: 0,
            icon:<FaFacebook className='icon facebook-icon'/>,
            path: 'https://www.facebook.com/arianabraving',
          },
          { id: 1,
            icon:<FaInstagram className='icon instagram-icon'/>,
            path: 'https://www.instagram.com/arianabraving',
          },
          { id: 2,
            icon:<FaTelegram className='icon telegram-icon'/>,
            path: 'https://t.me/ArianaBraving',
          },
          { id: 3,
            icon:<FaYoutube className='icon youtube-icon'/>,
            path: 'https://www.youtube.com/results?search_query=arianabraving',
          },
        ]
    }
  render() {
    return (
      <FooterWrapper>
        <div className='title'> eatery </div>
        <div className='icons'>
            {this.state.icons.map(item => (
                <a href={item.path} key={item.id} target='_blank' rel='noopener noreferrer'>
                    {item.icon}
                </a>
            ))}
        </div>
        <p className="copyright">copyright &copy; 2019 ariana braving </p>
        
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
    background: ${styles.colors.mainBlack};
    padding: 2rem 0;
    .icons{
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin:0 auto;
    }
    .icon{
        color: ${styles.colors.mainWhite};
        font-size: 1.3rem;
        ${styles.transition({})};
        &:hover{
            color: ${styles.colors.mainYellow};
        }
    }
    .copyright{
        color: ${styles.colors.mainWhite};
        text-transform: capitalize;
        text-align: center;
        margin: 1rem 0;
    }
    .title{
        color: ${styles.colors.mainYellow};
        text-align: center;
        width: 10rem;
        text-transform: uppercase;
        padding: 0.3rem 1rem;
        margin: 0 auto 2rem auto;
        font-size: 1.5rem;
        ${styles.border({color: `${styles.colors.mainYellow}`})};
        ${styles.letterSpacing({spacing: '0.4rem'})}
    }

`