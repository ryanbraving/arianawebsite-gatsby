import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'
import {FaFacebook, FaInstagram, FaTelegram, FaYoutube} from 'react-icons/fa'

export default class NavbarIcons extends Component {
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
      <IconWrapper>
        {
          this.state.icons.map(item => {
            return(
              <a 
                key= {item.id}
                href= {item.path}
                target= "_blank"
                rel= "noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })
        }
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
.icon{
  font-size: 1.5rem;
  coursor:pointer;
  ${styles.transObject({})};
  &:hover{
    color:${styles.colors.mainYellow};
  }
}

.facebook-icon{
  color: #3b579d;
}
.instagram-icon{
  color: #da5f53;
}
.telegram-icon{
  color: #0088cc;
}
.youtube-icon{
  color: #ff0000;
  // font-size: 1.6rem;
}

display: none;
@media (min-width:768px){
  display: flex;
  width:10rem;
  justify-content: space-around;
}
`