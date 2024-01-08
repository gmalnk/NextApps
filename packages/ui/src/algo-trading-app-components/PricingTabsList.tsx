"use client";

import { TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useState } from "react";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";

export default function PricingTabsList() {
  const [tab, setTab] = useState("m");
  return tab === "m" ? (
    <TabsList>
      <TabsTrigger onClick={() => setTab("m")} value="Monthly">
        <ButtonDark text="Monthly" />
      </TabsTrigger>
      <TabsTrigger onClick={() => setTab("y")} value="Yearly">
        <ButtonLight text="Yearly" />
      </TabsTrigger>
    </TabsList>
  ) : (
    <TabsList>
      <TabsTrigger onClick={() => setTab("m")} value="Monthly">
        <ButtonLight text="Monthly" />
      </TabsTrigger>
      <TabsTrigger onClick={() => setTab("y")} value="Yearly">
        <ButtonDark text="Yearly" />
      </TabsTrigger>
    </TabsList>
  );
}
