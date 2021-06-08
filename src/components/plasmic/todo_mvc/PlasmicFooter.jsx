// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f71W5CN6UCjtobR98gomX1
// Component: v0aod5snmh3Bk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ToggleButton from "../../ToggleButton"; // plasmic-import: IHABy7bS-ae-_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: f71W5CN6UCjtobR98gomX1/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: v0aod5snmh3Bk/css

export const PlasmicFooter__VariantProps = new Array("state");

export const PlasmicFooter__ArgProps = new Array("count");

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"footerContainer"}
      data-plasmic-override={overrides.footerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.footerContainer
      )}
    >
      {(
        hasVariant(variants, "state", "empty")
          ? false
          : hasVariant(variants, "state", "singularLeft")
          ? true
          : hasVariant(variants, "state", "hasCompleted")
          ? true
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__lGodK, {
            [sty.box__state_empty__lGodKOO4P]: hasVariant(
              variants,
              "state",
              "empty"
            ),

            [sty.box__state_hasCompleted__lGodKb1VfQ]: hasVariant(
              variants,
              "state",
              "hasCompleted"
            ),

            [sty.box__state_singularLeft__lGodK7U6J]: hasVariant(
              variants,
              "state",
              "singularLeft"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "2",
            value: args.count,
            className: classNames(sty.slotCount, {
              [sty.slotCount__state_hasCompleted]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              ),

              [sty.slotCount__state_singularLeft]: hasVariant(
                variants,
                "state",
                "singularLeft"
              )
            })
          })}

          {(hasVariant(variants, "state", "singularLeft") ? true : true) ? (
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__kpd6B,
                {
                  [sty.box__state_empty__kpd6BOO4P]: hasVariant(
                    variants,
                    "state",
                    "empty"
                  ),

                  [sty.box__state_hasCompleted__kpd6Bb1VfQ]: hasVariant(
                    variants,
                    "state",
                    "hasCompleted"
                  ),

                  [sty.box__state_singularLeft__kpd6B7U6J]: hasVariant(
                    variants,
                    "state",
                    "singularLeft"
                  )
                }
              )}
            >
              {hasVariant(variants, "state", "singularLeft")
                ? " item left"
                : " items left"}
            </div>
          ) : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__gkfrl)}
      >
        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton__sOp5O)}
          state={"selected"}
        >
          {"All"}
        </ToggleButton>

        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton__ooNFw)}
        >
          {"Completed"}
        </ToggleButton>

        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton___1ZKmu)}
        >
          {"Active"}
        </ToggleButton>
      </p.Stack>

      {(hasVariant(variants, "state", "hasCompleted") ? true : false) ? (
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__cbokr,
            {
              [sty.box__state_hasCompleted__cbokrb1VfQ]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              )
            }
          )}
        >
          {"Clear completed"}
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  footerContainer: ["footerContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "footerContainer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footerContainer"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
