import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as colors from './colors'

export default createGlobalStyle`
    ${reset};


    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        scroll-behavior: smooth;
        color: ${colors.primary};
    }

    body {
        font-size: 1.6rem;
        overflow-x: hidden;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
    }

    body,
    #root {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }

    #root {
        min-height: 100%;
    }
`
