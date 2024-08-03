import { Card, CardBody, Image, Skeleton } from '@nextui-org/react'

const ImageCard = ({ item, loading, imageqty }) => {
    return (
        <Card radius='none'>
            <CardBody className={`
                max-w-[225px] p-2
                ${imageqty === 2 && 'flex flex-row gap-2'}
                ${imageqty >= 3 && 'flex flex-row flex-wrap gap-2'}
                `}>
                {
                    loading ?
                        <Card radius='none'>
                            <Skeleton className="p-0">
                                <div className="w-[200px] h-[200px] rounded-lg bg-default-300"></div>
                            </Skeleton>
                        </Card>
                        :

                        item.attachments.map((image, idx) => {
                            if (imageqty >= 5) {
                                if (idx >= 4) return
                            }
                            return (
                                <Card key={idx} radius='none'>
                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                            className={`
                                            w-[200px] h-[200px] object-cover
                                            ${imageqty > 1 && 'w-[100px] h-[100px]'}
                                            `}
                                            shadow="sm"
                                            radius='none'
                                            isBlurred
                                            width="100%"
                                            alt="NextUI hero Image"
                                            src={image}
                                        />
                                    </CardBody>
                                </Card>
                            )
                        })
                }
            </CardBody>
        </Card>
    )
}

export default ImageCard