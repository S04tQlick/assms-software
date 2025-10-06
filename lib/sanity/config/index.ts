import pageSchema from "@/lib/sanity/schemas/page-schema";
import imageAssetSchema from "@/lib/sanity/schemas/image-asset-schema";
import institutionSchema from "@/lib/sanity/schemas/institution-schema";
import branchSchema from "@/lib/sanity/schemas/branch-schema";



const schemas = 
    [
        pageSchema, 
        imageAssetSchema, 
        institutionSchema,
        branchSchema
    ];

export default schemas;