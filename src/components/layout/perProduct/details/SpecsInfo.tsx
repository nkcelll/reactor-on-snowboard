import type { ProductSpecs } from '../types';

interface SpecsInfoPropsEndpoint {
  detailOpen: boolean;
  specs: ProductSpecs;
}

export default function SpecsInfo({
  detailOpen,
  specs,
}: SpecsInfoPropsEndpoint) {
  // console.log(specs);
  const keys = Object.entries(specs);
  // const values = Object.values(specs)
  //   const specsArray = [
  //   { name: "Band", value: "Purepop" },
  //   { name: "Shape", value: "Twin" },
  //   { name: "Flex", value: "Twin" },
  //   { name: "Core", value: "Super Fly II™ 700G Core with Dualzone™ EGD™" },
  //   { name: "Fiberglass", value: "Triax" },
  //   { name: "Base", value: "Sintered" },
  //   { name: "Mounting", value: "The Channel" },
  //   { name: "Features", value: "Scoop" },
  //   { name: "Riding Level", value: "Intermediate" },
  //   { name: "Sustainability 1", value: "Super Sap" },
  //   { name: "Sustainability 2", value: "Super Sap Super" }
  // ];

  const specsInfoElements = keys.map(([key, value]) => (
    <dl className="list-specs">
      <dt className="list-specs-li-top">
        {key.charAt(0).toLocaleUpperCase() + key.slice(1)}
      </dt>
      <dt className="list-specs-li-bottom">{value}</dt>
    </dl>
  ));

  return (
    <div className={`dropdown-text ${detailOpen ? 'isDetailsOpen' : ''}`}>
      <div className="list-specs-container">{specsInfoElements}</div>
    </div>
  );
}
