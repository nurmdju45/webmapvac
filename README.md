# Vac WebMap

Welcome to the GitHub repository for the Vac WebMap project, developed by Nur Mohammad. This interactive web platform features detailed maps and insights about the town of Vác, Hungary. The website utilizes HTML, CSS, JavaScript, and OpenLayers to provide an enriched user experience with interactive maps and dynamic content.

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

#### Special Item: OpenStreetMap Layer
```javascript
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
```
