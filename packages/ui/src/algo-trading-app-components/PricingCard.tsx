import ButtonDark from "./ButtonDark";
import { Check } from "lucide-react";

export default function PricingCard(props: any) {
  return (
    <div className="pricingPlanCard min-w-80">
      <div className="pricingPlanContainer">
        <div className="flex justify-center items-center w-full">
          <div className="pricingPlanHeading text-4xl">
            {props.plan.Heading}
          </div>
        </div>
        <div className="pricingPlanCost">{props.plan.Cost}</div>
        <div className="pricingPlanLine"></div>
        <div className="pricingPlanSubHeadding">Includes:</div>
        {props.plan.Items.map((element: any) => {
          return (
            <div key={element} className="pricingPlanItem">
              <Check />
              <div className="priicngPlanItemText">{element}</div>
            </div>
          );
        })}
        <div
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          <ButtonDark text="Subcribe" />
        </div>
      </div>
    </div>
  );
}
