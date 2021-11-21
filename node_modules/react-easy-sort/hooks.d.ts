import React from 'react';
import { Point } from './types';
export declare type OnStartArgs = {
    point: Point;
    pointInWindow: Point;
};
export declare type OnMoveArgs = {
    point: Point;
    pointInWindow: Point;
};
declare type UseDragProps = {
    onStart?: (args: OnStartArgs) => void;
    onMove?: (args: OnMoveArgs) => void;
    onEnd?: () => void;
    containerRef: React.MutableRefObject<HTMLElement | null>;
    knobs?: HTMLElement[];
};
export declare const useDrag: ({ onStart, onMove, onEnd, containerRef, knobs }: UseDragProps) => {
    onMouseDown?: undefined;
} | {
    onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
export {};
//# sourceMappingURL=hooks.d.ts.map