import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Fonte do mapa
const geoUrl =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

// Coordenadas dos estados
const stateCoordinates: {
  [key: string]: { abbreviation: string; coordinates: [number, number] };
} = {
  Acre: { abbreviation: "AC", coordinates: [-70.55, -9.02] },
  Alagoas: { abbreviation: "AL", coordinates: [-36.55, -9.57] },
  Amapá: { abbreviation: "AP", coordinates: [-51.77, 1.41] },
  Amazonas: { abbreviation: "AM", coordinates: [-63.9, -3.07] },
  Bahia: { abbreviation: "BA", coordinates: [-41.5, -12.97] },
  Ceará: { abbreviation: "CE", coordinates: [-39.3, -5.2] },
  "Distrito Federal": { abbreviation: "DF", coordinates: [-47.9, -15.8] },
  "Espírito Santo": { abbreviation: "ES", coordinates: [-40.3, -20.3] },
  Goiás: { abbreviation: "GO", coordinates: [-49.3, -16.6] },
  Maranhão: { abbreviation: "MA", coordinates: [-45.0, -5.0] },
  "Mato Grosso": { abbreviation: "MT", coordinates: [-56.1, -12.6] },
  "Mato Grosso do Sul": { abbreviation: "MS", coordinates: [-54.6, -20.5] },
  "Minas Gerais": { abbreviation: "MG", coordinates: [-44.0, -18.9] },
  Pará: { abbreviation: "PA", coordinates: [-52.8, -3.8] },
  Paraíba: { abbreviation: "PB", coordinates: [-36.5, -7.1] },
  Paraná: { abbreviation: "PR", coordinates: [-51.9, -24.9] },
  Pernambuco: { abbreviation: "PE", coordinates: [-37.8, -8.4] },
  Piauí: { abbreviation: "PI", coordinates: [-42.8, -7.7] },
  "Rio de Janeiro": { abbreviation: "RJ", coordinates: [-42.9, -22.9] },
  "Rio Grande do Norte": { abbreviation: "RN", coordinates: [-36.6, -5.8] },
  "Rio Grande do Sul": { abbreviation: "RS", coordinates: [-53.0, -30.0] },
  Rondônia: { abbreviation: "RO", coordinates: [-63.0, -10.8] },
  Roraima: { abbreviation: "RR", coordinates: [-61.3, 2.1] },
  "Santa Catarina": { abbreviation: "SC", coordinates: [-50.9, -27.3] },
  "São Paulo": { abbreviation: "SP", coordinates: [-48.5, -23.5] },
  Sergipe: { abbreviation: "SE", coordinates: [-37.0, -10.6] },
  Tocantins: { abbreviation: "TO", coordinates: [-48.3, -10.2] },
};

const BrazilMap = ({
  onSelectState,
}: {
  onSelectState: (state: string) => void;
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 730, center: [-50, -18] }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              const stateData = stateCoordinates[stateName];

              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    tabIndex={-1}
                    onClick={() => onSelectState(stateName)}
                    style={{
                      default: {
                        fill: "#DDD",
                        stroke: "#FFF",
                        outline: "none",
                      },
                      hover: {
                        fill: "rgb(175, 134, 190)",
                        stroke: "#FFF",
                        outline: "none",
                        color: "white",
                      },
                      pressed: {
                        fill: "#9e5ab9",
                        stroke: "#FFF",
                        outline: "none",
                      },
                    }}
                  />
                  {stateData && (
                    <Marker coordinates={stateData.coordinates}>
                      <text
                        textAnchor="middle"
                        fill="#7e7e7e"
                        fontSize={5}
                        fontWeight="bold"
                        strokeWidth={0.5}
                      >
                        {stateData.abbreviation}
                      </text>
                    </Marker>
                  )}
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default BrazilMap;
