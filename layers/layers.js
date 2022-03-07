var wms_layers = [];

var format_CANTON_0 = new ol.format.GeoJSON();
var features_CANTON_0 = format_CANTON_0.readFeatures(json_CANTON_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTON_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTON_0.addFeatures(features_CANTON_0);
var lyr_CANTON_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANTON_0, 
                style: style_CANTON_0,
                interactive: true,
                title: '<img src="styles/legend/CANTON_0.png" /> CANTON'
            });

lyr_CANTON_0.setVisible(true);
var layersList = [lyr_CANTON_0];
lyr_CANTON_0.set('fieldAliases', {'id_bdcarto': 'id_bdcarto', 'insee_cant': 'insee_cant', 'insee_arr': 'insee_arr', 'insee_dept': 'insee_dept', 'insee_reg': 'insee_reg', });
lyr_CANTON_0.set('fieldImages', {'id_bdcarto': '', 'insee_cant': '', 'insee_arr': '', 'insee_dept': '', 'insee_reg': '', });
lyr_CANTON_0.set('fieldLabels', {'id_bdcarto': 'no label', 'insee_cant': 'no label', 'insee_arr': 'no label', 'insee_dept': 'no label', 'insee_reg': 'no label', });
lyr_CANTON_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});