import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Image from "next/image";
import ProductReview from "../_components/ProductReview";

const ProductInformationTab = () => {
  return (
    <div>
      <Tabs defaultValue="desc" className="w-full">
        <TabsList className="gap-5 sm:gap-10 md:gap-20 p-0 pb-[14px] text-base rounded-none w-full  md:justify-start font-medium  border-b border-pearl  text-dark-gray mb-7">
          <TabsTrigger value="desc">Description</TabsTrigger>
          <TabsTrigger value="info">Additional Info</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="desc">
          <article>
            <div className="text-sm mb-12 text-purple flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              </p>
              <p>
                Sumptuous, filling, and temptingly healthy, our Biona Organic
                Granola with Wild Berries is just the thing to get you out of
                bed. The goodness of rolled wholegrain oats are combined with a
                variety of tangy organic berries, and baked into crispy clusters
                that are as nutritious.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-7">
              <Image
                width={540}
                height={323}
                className="object-cover w-full"
                alt="strawberry slushie"
                src={"/assets/images/product/strawberry-slushie.png"}
              />
              <div className="text-base flex gap-5 flex-col leading-normal">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text. All the Lorem
                  Ipsum, making this the first true gener ator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  gener ator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
            </div>
          </article>
        </TabsContent>
        <TabsContent value="info">
          <article className="text-base lg:text-sm text-dark-gray">
            <div className="flex flex-col gap-4">
              <p>
                Authoritatively fabricate multidisciplinary resources with
                mission-critical schemas. Energistically productize ubiquitous
                value for excellent supply chains. Progressively expedite
                enterprise-wide networks rather than end-to-end relationships
              </p>

              <strong>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Cras mattis consectetur purus sit amet fermentum. Vestibulum
                id ligula porta felis euismod semper.
              </strong>

              <p>
                Maecenas faucibus mollis interdum. Nullam quis risus eget urna
                mollis ornare vel eu leo. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Integer posuere
                erat a ante venenatis dapibus posuere velit aliquet. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
              </p>
            </div>
          </article>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="flex flex-col gap-5">
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
            <ProductReview />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default ProductInformationTab;
