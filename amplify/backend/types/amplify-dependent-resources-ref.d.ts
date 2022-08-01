export type AmplifyDependentResourcesAttributes = {
    "api": {
        "apimashup": {
            "ServiceName": "string",
            "ClusterName": "string",
            "PipelineName": "string",
            "ContainerNames": "string",
            "ApiName": "string",
            "RootUrl": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string"
        }
    }
}