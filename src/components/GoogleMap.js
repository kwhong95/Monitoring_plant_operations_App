import  React ,  {  Component  }  from  'react' ;
import  GoogleMapReact  from  'google-map-react' ;
import Marker from "./MapMarker";



class  SimpleMap  extends  Component  {
    static  defaultProps  =  {
        center : {
            lat : 37.348701185588666 ,
            lng : 126.73863959770671
        } ,
        zoom : 17
    } ;
    render ( )  {
        return  (
            < div  style = { {  height : '50vh' ,  width : '60vh'  } } >
                < GoogleMapReact
                    bootstrapURLKeys = { {  key : 'AIzaSyAmY1CYd63q9wVGnLqyzIXGYRQAjq-vJiM' } }
                    defaultCenter = { this.props.center }
                    defaultZoom = { this.props.zoom }
                >
                    <Marker
                        text="Power Plant 1"
                        lat={37.348701185588666}
                        lng={126.73863959770671}
                    />
                < / GoogleMapReact >
            < / div >
        ) ;
    }
}

export default SimpleMap ;