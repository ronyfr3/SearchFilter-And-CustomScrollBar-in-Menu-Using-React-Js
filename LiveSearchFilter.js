import React,{useState} from 'react'
import useOnclickOutside from "react-cool-onclickoutside";
import {FcSearch} from 'react-icons/fc'
import {FaBars} from 'react-icons/fa'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './index.css'

function LiveSearchFilter() {
    const [open,setOpen]=useState(false)
    const [input,setInput]=useState('');
    const ref = useOnclickOutside(() => {
        setOpen(false);
      });
    const clickChange=()=>{
        setOpen(!open);
    }
    let items=
    [
        {'label':'Get Started'},
        {'label':'Community Forum'},
        {'label':'Source Code'},
        {'label':'Support'},
        {'label':'Store'},
    ]
    let theme=
    [
        {'label':'Guide'},
        {'label':'Theme Designer'},
        {'label':'Visual EDitor'},
        {'label':'SASS API'}
    ]
    let data=
    [
        {'label':'Data Table'},
        {'label':'Data View'},
        {'label':'Data Saver'},
        {'label':'Google Maps'}
    ]

    if(input.length>0){
        items = items.filter((value)=>{
            return value.label.toLowerCase().match(input)
        })
    }
    if(input.length>0){
        theme = theme.filter((value)=>{
            // match or includes same but include is case sensitive
            return value.label.toLowerCase().match(input)
        })
    }
    if(input.length>0){
        data = data.filter((value)=>{
            // match or includes same but include is case sensitive
            return value.label.toLowerCase().match(input)
        })
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setInput(e.target.value)
    }

    return (
        <div className="container">  
            <div className="bars" onClick={clickChange}><FaBars/></div>
                <div className="thirdDiv">
                    {
                        open && 
                        (
                            
                            <div className="main" ref={ref}>
                                <SimpleBar className='simpleBarCss' style={{ maxHeight: 500, forceVisible:"y", autoHide:false }}>
                                <div className="search-input">
                                        <input
                                            type="text"
                                            className="input-text"
                                            onChange={handleChange}
                                            value={input}
                                            placeholder="Search"
                                    />
                                        
                                    <div className="icon-input">
                                        <span className="search-icon">
                                            <FcSearch/>
                                        </span>          
                                    </div>                        
                                </div>
                                <div className="borderBottom"></div>                           

                        <div className="list-item">
                        <h3>GENERAL</h3>
                            {
                                items.map((items,i)=>{
                                return( 
                                    <div key={i}>
                                        <ul>
                                            <li className="items">
                                                {items.label}
                                            </li>
                                        </ul>
                                    </div>
                               )
                           }
                        )
                            }
                            <h3>THEMING</h3>
                            {
                                theme.map((theme,i)=>{
                                return( 
                                        <div key={i}>
                                            <ul>
                                                <li className="items">
                                                    {theme.label}
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            )
                            }
                            <h3>DATA</h3>
                            {
                                data.map((data,i)=>{
                                return( 
                                        <div key={i}>
                                            <ul>
                                                <li className="items">
                                                    {data.label}
                                                </li>
                                            </ul>
                                            </div>
                                    )
                                    }
                                )
                            }   
                         <div className="borderBottom"></div> 
                      </div>  
                    </SimpleBar>                          
                </div> 
            )
         }
         </div>
      </div>
    )
  }
export default LiveSearchFilter
