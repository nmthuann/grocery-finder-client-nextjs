"use client";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

import React from "react";
import image1 from "../../../../../public/billboard/Black and Red Simple Promotion Billboard Landscape.png";
import image2 from "../../../../../public/billboard/Green and Yellow Retro Hot Dog Restaurant Grand Opening Billboard Ad.jpg";
import image3 from "../../../../../public/billboard/Purple and Yellow 3D Illustrative Delivery Services Billboard Web Ad.jpg";
import image4 from "../../../../../public/billboard/Yellow Modern Black Friday Sale Promo Billboard Ad.jpg";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const images = [image2, image1, image3, image4];

const Billboard = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="items-end rounded-lg">
            <Carousel
                className="start-0 w-full max-w-7xl "
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={image.src}>
                            <div className="p-1">
                                <Card
                                    isFooterBlurred
                                    className="w-full h-64 col-span-12 sm:col-span-7"
                                >
                                    <CardHeader className="absolute z-20 top-1 left-5 bottom-4 flex-col items-start">
                                        <p className="text-sm text-white/60 uppercase font-bold">
                                            {index + 1}
                                        </p>
                                    </CardHeader>
                                    <Image
                                        removeWrapper
                                        alt="Relaxing app background"
                                        className="z-1 w-full h-[420px] object-cover"
                                        src={image.src}
                                        fallbackSrc="https://via.placeholder.com/300x200"
                                    />
                                    <CardFooter className="absolute bg-slate-900/30 bottom-0 z-10 dark:border-default-100">
                                        <div className="flex flex-grow gap-2 items-center">
                                            <Image
                                                alt="Breathing app icon"
                                                className=" w-11 h-11 rounded-3xl"
                                                src="https://nextui.org/images/breathing-app-icon.jpeg"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-tiny text-white/80">
                                                    Nhanh tay truy cập
                                                </p>
                                                <p className="text-tiny text-white/80">
                                                    Chào đoán ngày mới với ưu
                                                    đãi cực sốc
                                                </p>
                                            </div>
                                        </div>
                                        <Button
                                            radius="full"
                                            size="lg"
                                            color="primary"
                                            variant="shadow"
                                            className="font-bold text-slate-100 border-4 border-slate-100 bg-slate-900 "
                                        >
                                            Xem Ngay
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>

            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    );
};

export default Billboard;
