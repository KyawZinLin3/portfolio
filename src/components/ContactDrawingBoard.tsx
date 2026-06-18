"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

const colors = ["#111111", "#0f766e", "#2563eb", "#e11d48", "#f59e0b"];
type DrawingTool = "brush" | "eraser";
type Point = {
  x: number;
  y: number;
};

export function ContactDrawingBoard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);
  const toolRef = useRef<DrawingTool>("brush");
  const colorRef = useRef(colors[0]);
  const brushSizeRef = useRef(5);
  const [selectedTool, setSelectedTool] = useState<DrawingTool>("brush");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [brushSize, setBrushSize] = useState(5);
  const [isEmpty, setIsEmpty] = useState(true);

  const applyBrush = useCallback(() => {
    const context = contextRef.current;

    if (!context) {
      return;
    }

    context.lineCap = "round";
    context.lineJoin = "round";
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = toolRef.current === "eraser" ? "#ffffff" : colorRef.current;
    context.lineWidth =
      toolRef.current === "eraser" ? brushSizeRef.current * 2.2 : brushSizeRef.current;
  }, []);

  const clearBoard = useCallback(() => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context) {
      return;
    }

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
    applyBrush();
    setIsEmpty(true);
  }, [applyBrush]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    contextRef.current = context;

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      const snapshot = document.createElement("canvas");
      const hasDrawing = canvas.width > 0 && canvas.height > 0;

      if (hasDrawing) {
        snapshot.width = canvas.width;
        snapshot.height = canvas.height;
        snapshot.getContext("2d")?.drawImage(canvas, 0, 0);
      }

      canvas.width = Math.max(1, Math.round(bounds.width * nextDpr));
      canvas.height = Math.max(1, Math.round(bounds.height * nextDpr));

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      if (hasDrawing) {
        context.drawImage(
          snapshot,
          0,
          0,
          snapshot.width,
          snapshot.height,
          0,
          0,
          canvas.width,
          canvas.height,
        );
      }

      context.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);
      applyBrush();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [applyBrush]);

  const getPoint = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return { x: 0, y: 0 };
    }

    const bounds = canvas.getBoundingClientRect();

    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const drawPoint = (point: Point) => {
    const context = contextRef.current;
    const lastPoint = lastPointRef.current;

    if (!context || !lastPoint) {
      return;
    }

    const midpoint = {
      x: (lastPoint.x + point.x) / 2,
      y: (lastPoint.y + point.y) / 2,
    };

    context.quadraticCurveTo(lastPoint.x, lastPoint.y, midpoint.x, midpoint.y);
    context.stroke();
    lastPointRef.current = point;
  };

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    const context = contextRef.current;

    if (!context) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    const point = getPoint(event);

    isDrawingRef.current = true;
    setIsEmpty(false);
    applyBrush();
    context.beginPath();
    context.moveTo(point.x, point.y);
    lastPointRef.current = point;
  };

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    const context = contextRef.current;

    if (!context || !isDrawingRef.current) {
      return;
    }

    const point = getPoint(event);
    drawPoint(point);
  };

  const stopDrawing = (event: PointerEvent<HTMLCanvasElement>) => {
    const context = contextRef.current;

    if (!context) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    isDrawingRef.current = false;
    lastPointRef.current = null;
    context.closePath();
  };

  return (
    <div className="relative w-full max-w-full min-w-0 rounded-[24px] border border-neutral-200 bg-white/70 p-2 shadow-[0_28px_70px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur sm:rounded-[28px]">
      <div className="flex min-w-0 flex-col gap-2 border-b border-neutral-200/80 px-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-3">
        <div className="flex items-center gap-2 self-start sm:self-auto" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <button
            type="button"
            aria-label="Eraser tool"
            aria-pressed={selectedTool === "eraser"}
            onClick={() => {
              toolRef.current = "eraser";
              setSelectedTool("eraser");
              applyBrush();
            }}
            className={`flex size-9 items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 ${
              selectedTool === "eraser"
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-950 hover:text-white"
            }`}
          >
            <EraserIcon />
          </button>

          <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-[#f8f8fa] p-1">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                aria-label={`Use ${color} brush`}
                onClick={() => {
                  toolRef.current = "brush";
                  colorRef.current = color;
                  setSelectedTool("brush");
                  setSelectedColor(color);
                  applyBrush();
                }}
                className={`size-6 rounded-full border transition ${
                  selectedColor === color
                    ? "border-neutral-950 shadow-[0_0_0_2px_rgba(15,23,42,0.12)]"
                    : "border-white"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={clearBoard}
            className="flex h-9 items-center justify-center rounded-full border border-neutral-200 bg-white px-3 text-xs font-semibold text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:bg-neutral-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Clear
          </button>

          <label className="sr-only" htmlFor="contact-board-brush">
            Brush size
          </label>
          <input
            id="contact-board-brush"
            type="range"
            min="2"
            max="14"
            value={brushSize}
            aria-label="Brush size"
            onChange={(event) => {
              const nextSize = Number(event.target.value);
              brushSizeRef.current = nextSize;
              setBrushSize(nextSize);
              applyBrush();
            }}
            className="h-1.5 w-full min-w-[120px] flex-1 basis-full accent-neutral-950 sm:w-20 sm:min-w-0 sm:flex-none sm:basis-auto"
          />
        </div>
      </div>

      <div className="relative mt-2">
        {isEmpty ? (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-medium text-neutral-400 sm:text-base">
            Draw and fun
          </div>
        ) : null}
        <canvas
          ref={canvasRef}
          aria-label="Interactive drawing board"
          className="block h-[132px] w-full touch-none rounded-[22px] border border-neutral-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-[148px] lg:h-[132px]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
        />
      </div>
    </div>
  );
}

function EraserIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m4 15.5 8.9-8.9a2 2 0 0 1 2.8 0l2.7 2.7a2 2 0 0 1 0 2.8L10.5 20H4.8L4 15.5Zm5.5 4.5L4 14.5m8.5 5.5H20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
