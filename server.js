const express=require('express')
const server=express();
const db=require('./db')
const path=require('path')
const Nexmo = require('nexmo');

// Init Nexmo
const nexmo = new Nexmo({
    apiKey: 'ff13b66a',
    apiSecret: 'axi9BECPOzVA8S6Y'
  }, { debug: true });

server.use(express.json())
server.use(express.urlencoded({extended:true}))

const hello = require('./routers/signup2')
const ajxroute=require('./routers/signup1')
const ingi=require('./routers/signupingi')
const ajxroute1=require('./routers/signupingi1')
const ngo=require('./routers/signupngo')
const ajxroute2=require('./routers/signupngo1')

server.use('/signupngo',ngo)
server.use('/signupngo1',ajxroute2)
server.use('/signupingi',ingi)
server.use('/signupingi1',ajxroute1)
server.use('/signup2',hello)
server.use('/signup1',ajxroute)

const userroute = require('./routers/user')
server.use('/user',userroute)
server.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
server.use(express.static('./'));
const ingiroute = require('./routers/invigilator')
server.use('/invigilator',ingiroute)
const ingiroute2 = require('./routers/invigilator2')
server.use('/invigilator2',ingiroute2)
server.get('/video',function(req,res){
  res.sendFile(path.join(__dirname+'/video.html'));
})
const ngoroute = require('./routers/ngo')
server.use('/ngo',ngoroute)
const ngoroute2 = require('./routers/ngo2')
server.use('/ngo2',ngoroute2)

server.set("view engine","hbs")
server.get('/add',function(req,res,next){

db.getAllVictim().then((victim)=>{
    res.render('victim',{victim})
    
    }).catch((err)=>{
    res.send(err)
    })
    
    })

    server.get('/add1',function(req,res,next){

      db.getAllNgo().then((ngo_info)=>{
          res.render('ngo_info',{ngo_info})
          
          }).catch((err)=>{
          res.send(err)
          })
          
          })

   server.get('/region',function(req,res,next){
    res.send(`<!DOCTYPE html>
    <html> 
    <head> 
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
      <title>Google Maps Multiple Markers</title> 
      </head>
    <style>
          #map {
            height: 100%;
            margin-left:20px;
            margin-right:20px;
          }
          html, body
           {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: white;
          }
          p{
            text-align: center;
          }
    </style>
      <script src="http://maps.google.com/maps/api/js?sensor=false" 
              type="text/javascript"></script>
    
    <body>                                    
    
      <div id="map"></div>
    
      <script type="text/javascript">
        var locations = [
          ['Bihar', 25.0961, 85.3131],
          ['UP', 26.8467,80.9462],
          ['Rajasthan', 27.0238, 74.2179],
          ['MP', 22.9734, 78.6569],
          ['Maharashtra', 19.7515, 75.7139],
          ['Andhra Pradesh', 15.9129, 79.7400]
        ];
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: new google.maps.LatLng(20.5937, 78.9629),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        var infowindow = new google.maps.InfoWindow();
    
        var marker, i;
    
        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        }
      
        var locations1 = [
          ['Tamil Nadu', 11.059821, 78.387451],
          ['Karnataka', 15.317277,75.713890],
          ['Odisha', 20.940920, 84.803467],
          ['West Bengal', 22.978624, 87.747803],
          ['Gujarat', 22.309425, 72.136230],
          ['Jharkhand', 23.6102, 85.2799]
        ];
    
        var marker, i;
    
        for (i = 0; i < locations1.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations1[i][1], locations1[i][2]),
            map: map
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations1[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png')
        }
    
        var locations2 = [
          ['Assam',   26.244156 ,92.537842],
          ['Chattisgarh', 21.295132, 81.828232],
          ['Haryana', 29.238478, 76.431885],
          ['Jammu & Kashmir', 34.083656, 74.797371],
          ['Punjab', 31.1471, 75.3412],
          ['Himachal Pradesh', 32.084206 , 77.571167]
        ];
    
        var marker, i;
    
        for (i = 0; i < locations2.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations2[i][1], locations2[i][2]),
            map: map
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations2[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
        }
    
        var locations3 = [
          ['Arunachal Pradesh', 28.2180 ,94.7278],
          ['Delhi', 28.7041, 77.1025],
          ['Goa', 15.2993, 74.1240],
          ['Kerala', 10.850516 , 76.271080],
          ['Sikkim', 27.5330, 88.5122],
          ['Tripura', 23.745127, 91.746826],
          ['Uttarakhand', 30.0668 , 79.0193]
        ];
    
        var marker, i;
    
        for (i = 0; i < locations3.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations3[i][1], locations3[i][2]),
            map: map
          });
    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations3[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
          marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
        }
      </script>
    </body>
    </html>`
    )
   })
   
server.get('/sms',function(req,res,next){
    const number = '919711296617'
    const text = 'Alert in your region'

  nexmo.message.sendSms(
    '+919711296617', number, text, { type: 'unicode' },
    (err, responseData) => {
      if(err) {
        console.log(err);
      } else {
        const { messages } = responseData;
        const { ['message-id']: id, ['to']: number, ['error-text']: error  } = messages[0];
        console.dir(responseData);
        // Get data from response
        const data = {
          id,
          number,
          error
        };
      }
    }
  )
  res.send(`<!DOCTYPE html>
  <html>
      <head>
      <style>
      div {
        padding-top: 200px;
        padding-right: 50px;
        padding-bottom: 25px;
        padding-left: 25px;
      }
      p{
          text-shadow: 2px 2px red;
      }
      </style>
      </head>
      <body>
      <div style="text-align:center">
        <p style="font-size:2.5vw">Thank You for your support!!!</p> 
      </div> 
      </body>
      </html>`)
})

const loginUserRoute=require('./routers/login')
server.use('/login',loginUserRoute)
server.listen(4555);