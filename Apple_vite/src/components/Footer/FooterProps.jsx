import React, { Component } from 'react';

class FooterProps extends Component {
    render() {
        let {headTitle, linkName} = this.props
        return (
            <>
            <h3>{headTitle}</h3>
                <ul>
                    {
                        linkName.map((item,i)=>(
                    <li key={i}><a href='#'>{item}</a></li>
                        ))
                    }
                    
                </ul>
            </>
        );
    }
}

export default FooterProps;
