"use client";

import { Upload, Image as ImageIcon, Delete, PaperPlus } from "react-iconly";
import { useState, useRef } from "react";

interface InputImageProps {
    label?: string;
    maxSizeMB?: number;
    acceptedFormats?: string;
    showUrlImport?: boolean;
    onChange?: (file: File | string | null) => void;
    value?: string;
}

export function InputImage({
    label = "Image",
    maxSizeMB = 5,
    acceptedFormats = "JPG/PNG",
    showUrlImport = true,
    onChange,
    value,
}: InputImageProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(value || null);
    const [imageUrl, setImageUrl] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            handleFileUpload(file);
        }
    };

    const handleFileUpload = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
            onChange?.(file);
        };
        reader.readAsDataURL(file);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleUrlImport = () => {
        if (imageUrl.trim()) {
            setPreview(imageUrl);
            onChange?.(imageUrl);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        setImageUrl("");
        onChange?.(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleChange = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            {/* Label */}
            <label className="text-sm font-semibold text-grey-100">
                {label}
            </label>

            {/* Upload Area */}
            <div
                className={`
          relative border border-dashed rounded-xl h-[180px] flex flex-col items-center justify-center gap-3 transition-all
          ${preview ? "bg-grey-1100 border-grey-1000 overflow-hidden p-4" :
                        isDragging ? "bg-primary-1000 border-primary-700" :
                            "bg-white border-grey-1000 cursor-pointer hover:border-primary-700"}
        `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !preview && fileInputRef.current?.click()}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                />

                {!preview ? (
                    <>
                        <div className={`size-8 ${isDragging ? "text-primary-100" : "text-grey-500"}`}>
                            <ImageIcon set="bold" size={32} />
                        </div>

                        {isDragging ? (
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-primary-100">
                                    Drop your file(s) here
                                </span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-1 text-center">
                                <p className="text-sm font-medium text-grey-100">
                                    Drag & drop here or{" "}
                                    <span className="text-primary-100 cursor-pointer">click to browse</span>
                                </p>
                                <p className="text-xs text-grey-500">
                                    {acceptedFormats} format, maximum {maxSizeMB}MB size.
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Image Preview */}
                        <img
                            src={preview}
                            alt="Preview"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
                        />

                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex gap-2">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove();
                                }}
                                className="bg-danger-1000 border border-danger-900 p-2.5 rounded-lg hover:bg-danger-900 transition-colors"
                            >
                                <Delete set="bold" size={12} primaryColor="#F8285A" />
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleChange();
                                }}
                                className="bg-white border border-grey-1000 px-3 py-2.5 rounded-lg hover:bg-grey-1100 transition-colors flex items-center gap-1"
                            >
                                <ImageIcon set="bold" size={12} primaryColor="#76777A" />
                                <span className="text-[10px] font-medium text-grey-500">Change</span>
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* URL Import */}
            {showUrlImport && (
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex-1 h-px bg-grey-1000" />
                        <span className="text-sm text-grey-500">or</span>
                        <div className="flex-1 h-px bg-grey-1000" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-grey-100">
                            Import from URL
                        </label>
                        <div className="bg-white border border-grey-1000 rounded-lg flex items-center gap-3 pl-4 pr-2 py-2">
                            <PaperPlus set="bold" size={16} primaryColor="#76777A" />
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter image URL"
                                className="flex-1 text-sm text-grey-100 placeholder:text-grey-500 bg-transparent outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleUrlImport}
                                disabled={!imageUrl.trim()}
                                className={`
                  px-3 py-2.5 rounded-lg text-[10px] font-medium transition-colors
                  ${imageUrl.trim()
                                        ? "bg-primary-100 text-white hover:bg-primary-200"
                                        : "bg-grey-1100 text-grey-900 cursor-not-allowed border border-grey-1000"}
                `}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
