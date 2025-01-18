# Vác, Hungary WebMap

Welcome to the GitHub repository for the Vác WebMap project, developed by Nur Mohammad as a part of the **OpenSource GIS** and **Individual Geoinformatics Project** course. This interactive web platform features detailed maps and insights about the town of Vác, Hungary. The website utilizes HTML, CSS, JavaScript, and OpenLayers to provide an enriched user experience with interactive maps and dynamic content.

## Features

- **Interactive Maps**: Utilizing OpenLayers for dynamic and responsive map functionality.
- **Responsive Design**: Ensures that the website is accessible on various devices, featuring animated backgrounds and a mobile-responsive layout.
- **User Navigation**: Easy-to-use sidebar for navigation across different sections of the site.

## Project Structure

### Index Page (`index.html`)

The Index Page serves as the entry point and homepage of the website. It features a welcoming message and an embedded video highlighting Vác's attractions.

#### Code Example: Motion Background

```css
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
        rgba(0, 255, 0, 0.4),
        rgba(0, 0, 255, 0.4),
        rgba(255, 0, 255, 0.4),
        rgba(255, 255, 0, 0.4),
        rgba(0, 255, 255, 0.4)
    );
    background-size: 400% 400%;
    animation: gradientAnimation 10s ease infinite;
}
```

## Online Map (online-map.html)
This page incorporates OpenLayers to provide an interactive map displaying various thematic layers such as Temperature, Relative Humidity, and Solar Radiation.

### Special Item: 
#### OpenStreetMap Layer
```javascript
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
```
#### Define Style for Vector Data (GeoJSON)
```javascript
var pomStyle = function(feature, resolution) {
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({ color: 'black', width: 0.5 }),
            fill: new ol.style.Fill({ color: 'red' })
        }),
        text: new ol.style.Text({
            text: feature.get('name'),
            textAlign: 'left',
            offsetX: 12,
            font: '12px Arial, sans-serif',
            fill: new ol.style.Fill({ color: '#000' }),
            stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
        })
    });
};
```
#### Add Vector Data (GeoJSON) to the map
```javascript
var pomslayer = new ol.layer.Vector({
    title: "Measurement points",
    visible: true,
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'data/POMs.geojson'
    }),
    style: pomStyle
});
```
#### Add Layers to the Map
```javascript
var map = new ol.Map({
    target: 'map_div',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            title: "Base Map - OpenStreetMap",
            groupName: "base",
            type: 'base'
        }),
        pomslayer,
        poislayer
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([19.1, 47.5]),
        zoom: 10
    })
});
```

#### Layer Switcher for OpenLayers
```javascript
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Legend' // Optional label for button
});
map.addControl(layerSwitcher);
```
## PDF Maps (pdfs.html)
Provides links to downloadable PDF maps of Vác, facilitating access to offline content.

#### Special Item: Google Drive Links
```html
<p>
    <a href="https://drive.google.com/file/d/1s1vJwBRLZO2hMcr0YoLbqWdeRXP0QNd9/view?usp=sharing" target="_blank">Touristic Map</a>
</p>
```

## Information about Vác (info-vac.html)
Presents historical and cultural information about Vác with a visually appealing layout featuring photos and descriptions.

## Contact Us (contact-us.html)
This page provides contact details and an embedded Google Map for location referencing.

#### Special Item: Google Maps Embed
```html
Copy
<div class="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18..."></iframe>
</div>
```

### Some CSS Example: Sidebar Styles
```css
nav {
    background-color: rgba(0, 197, 205, 0.5);
    color: #fff;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -200px;
    transition: left 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

nav.open {
    left: 0;
}

nav a {
    background-color: rgba(0,197,205, 0.5);
    text-decoration: none;
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #fff;
    text-align: center;
    width: 80%;
}

nav a:hover {
    background-color: #555;
}
```
## Video Container
```css
.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Aspect ratio */
    overflow: hidden;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Technologies Used
-    HTML5
-    CSS3: For styling and animated effects.
-    JavaScript: For interactive elements.
-    OpenLayers: For displaying map data and providing interactive map functionality.

## Acknowledgments
- Special thanks to Institute of Cartography and Geoinformatics, Eötvös Loránd University for supporting this project.
- - Special thanks to **[Mátyás Gede](https://github.com/samanbey)** for his support in helping me to enrich the Vac WebMap.

```sql

This README now provides extensive code examples from each page, demonstrating how specific features are implemented and highlighting the project's interactivity and design choices.
```

## Project Link

View the live version of the Vác WebMap project here: [Vac WebMap Live](https://mercator.elte.hu/~d26855/web_gis/Vac/index1.html)

## Contact

For more information, suggestions, or contributions, please visit the project page or contact us directly:

- Project Page: [Vác WebMap Project](https://mercator.elte.hu/~d26855/web_gis/Vac/index1.html)
- Email: nurmdju45@gmail.com


