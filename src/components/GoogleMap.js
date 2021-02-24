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
            < div  style = { {  height : '30vh' ,  width : '75vh'  } } >
                < GoogleMapReact
                    bootstrapURLKeys = { {  key : 'AIzaSyAmY1CYd63q9wVGnLqyzIXGYRQAjq-vJiM' } }
                    defaultCenter = { this.props.center }
                    defaultZoom = { this.props.zoom }
                >
                    <Marker
                        text="VM1"
                        lat={37.348701185588666}
                        lng={126.73863959770671}
                    />
                    <Marker
                        text="VM2"
                        lat={37.348401185538665}
                        lng={126.73863959770671}
                    />
                    <Marker
                        text="VM3"
                        lat={37.348601185588666}
                        lng={126.73892959770671}
                    />
                < / GoogleMapReact >
            < / div >
        ) ;
    }
}

export default SimpleMap ;