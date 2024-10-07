import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const InfoCard = ({ icon: Icon, title, description }) => (
  <Card className="mb-4 bg-secondary/10">
    <CardContent className="flex items-start p-4">
      <Icon className="text-primary mr-3 mt-1" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </CardContent>
  </Card>
);

export default InfoCard;