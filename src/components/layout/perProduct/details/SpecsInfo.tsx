interface SpecsInfoProps {
  detailOpen: boolean;
}

export default function SpecsInfo({ detailOpen }: SpecsInfoProps) {
    const specsArray = [
    { name: "Band", value: "Purepop" },
    { name: "Shape", value: "Twin" },
    { name: "Flex", value: "Twin" },
    { name: "Core", value: "Super Fly II™ 700G Core with Dualzone™ EGD™" },
    { name: "Fiberglass", value: "Triax" },
    { name: "Base", value: "Sintered" },
    { name: "Mounting", value: "The Channel" },
    { name: "Features", value: "Scoop" },
    { name: "Riding Level", value: "Intermediate" },
    { name: "Sustainability 1", value: "Super Sap" },
    { name: "Sustainability 2", value: "Super Sap Super" }
  ];

  const specsInfoElements = specsArray.map(item => (
    <ul className="list-specs">
      <li className="list-specs-li-top">{item.name}</li>
      <li className="list-specs-li-bottom">{item.value}</li>
    </ul>
  ))

  return (
    <div className={`dropdown-text ${detailOpen ? 'isDetailsOpen' : ''}`}>
      <div className="list-specs-container">
       {specsInfoElements}
      </div>
    </div>
  );
}
