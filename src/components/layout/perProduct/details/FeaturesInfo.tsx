interface SpecsInfoProps {
  detailOpen: boolean;
}

export default function FeaturesInfo({detailOpen}: SpecsInfoProps) {
  const featuresArray = [
  {
    name: "Surfy Float",
    value: "A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days."
  },
  {
    name: "Powerful and Precise",
    value: "Our Camber Bend encourages powerful turns and poppy precision."
  },
  {
    name: "Lightweight and Full of Energy",
    value: "The carbon-reinforced fiberglass core matrix creates a stiff, fine-tuned flex and feel thats loaded with energy."
  },
  {
    name: "Directional Control",
    value: "Its directional shape and flex keep you carving and slashing with total control."
  },
  {
    name: "Surfy Float",
    value: "A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days."
  },
  {
    name: "Powerful and Precise",
    value: "Our Camber Bend encourages powerful turns and poppy precision."
  },
  {
    name: "Directional Control",
    value: "Its directional shape and flex keep you carving and slashing with total control."
  },
  {
    name: "Surfy Float",
    value: "A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days."
  },
  {
    name: "Powerful and Precise",
    value: "Our Camber Bend encourages powerful turns and poppy precision."
  },
  {
    name: "Directional Control",
    value: "Its directional shape and flex keep you carving and slashing with total control."
  },
  {
    name: "Surfy Float",
    value: "A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days."
  },
  {
    name: "Powerful and Precise",
    value: "Our Camber Bend encourages powerful turns and poppy precision."
  }
];

  const featuredInfoElements = featuresArray.map(item => (
    <ul className="list-specs">
      <li className="list-specs-li-top">{item.name}</li>
      <li className="list-specs-li-bottom">{item.value}</li>
    </ul>
  ))
  return (
    <div className={`dropdown-text ${detailOpen ? 'isDetailsOpen' : ''}`}>
      <div className="list-specs-container">
       {featuredInfoElements}
      </div>
    </div>
  )
}

