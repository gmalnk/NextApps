import PricingCard from "./PricingCard";
import { Tabs, TabsContent } from "../../components/ui/tabs";
import PricingTabsList from "./PricingTabsList";

export const basicPlanMonthly = {
  Heading: "Basic Plan",
  Cost: "$19/mo",
  Items: ["Analytics Dashboard", "Email Support", "Basic Features"],
};

export const bussinessPlanMonthly = {
  Heading: "Premium Plan",
  Cost: "$29/mo",
  Items: [
    "Advanced Analytics",
    "24/7 Support",
    "Premium Features",
    "Custom Reports",
    "Data Export",
  ],
};

export const basicPlanYearly = {
  Heading: "Basic Plan",
  Cost: "$180/Year",
  Items: ["Analytics Dashboard", "Email Support", "Basic Features"],
};

export const bussinessPlanYearly = {
  Heading: "Premium Plan",
  Cost: "$300/Year",
  Items: [
    "Advanced Analytics",
    "24/7 Support",
    "Premium Features",
    "Custom Reports",
    "Data Export",
  ],
};

export default function Pricing() {
  return (
    <div className="pricingContainer">
      <div className="pricingSection">
        <div className="pricingPlans">Pricing Plans</div>
        <div className="pricingText">
          Choose the perfect plan that suits your needs
        </div>
        <div className="pricingButtons justify-center items-center">
          <Tabs
            defaultValue="Monthly"
            className="flex flex-col justify-center items-center"
          >
            <PricingTabsList />
            <TabsContent value="Monthly">
              <div className="pricingCards">
                <div className="pricingCardsContainer">
                  <PricingCard plan={basicPlanMonthly} />
                  <PricingCard plan={bussinessPlanMonthly} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Yearly">
              <div className="pricingCards">
                <div className="pricingCardsContainer">
                  <PricingCard plan={basicPlanYearly} />
                  <PricingCard plan={bussinessPlanYearly} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
