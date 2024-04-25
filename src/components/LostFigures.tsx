import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresPrors {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresPrors> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h2>{title}</h2>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}{" "}
          {figure.logo && (
            <img width={20} height={20} src={figure.logo} alt="" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
