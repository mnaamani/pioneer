# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [proto/Channel.proto](#proto/Channel.proto)
    - [ChannelCategoryMetadata](#.ChannelCategoryMetadata)
    - [ChannelMetadata](#.ChannelMetadata)
  
- [proto/Council.proto](#proto/Council.proto)
    - [CouncilCandidacyNoteMetadata](#.CouncilCandidacyNoteMetadata)
  
- [proto/Forum.proto](#proto/Forum.proto)
    - [ForumPostMetadata](#.ForumPostMetadata)
    - [ForumPostReaction](#.ForumPostReaction)
    - [ForumThreadMetadata](#.ForumThreadMetadata)
  
    - [ForumPostReaction.Reaction](#.ForumPostReaction.Reaction)
  
- [proto/Membership.proto](#proto/Membership.proto)
    - [MembershipMetadata](#.MembershipMetadata)
  
- [proto/Person.proto](#proto/Person.proto)
    - [PersonMetadata](#.PersonMetadata)
  
- [proto/Playlist.proto](#proto/Playlist.proto)
    - [PlaylistMetadata](#.PlaylistMetadata)
  
- [proto/Series.proto](#proto/Series.proto)
    - [SeasonMetadata](#.SeasonMetadata)
    - [SeriesMetadata](#.SeriesMetadata)
  
- [proto/Video.proto](#proto/Video.proto)
    - [License](#.License)
    - [MediaType](#.MediaType)
    - [PublishedBeforeJoystream](#.PublishedBeforeJoystream)
    - [VideoCategoryMetadata](#.VideoCategoryMetadata)
    - [VideoMetadata](#.VideoMetadata)
  
- [proto/WorkingGroups.proto](#proto/WorkingGroups.proto)
    - [AddUpcomingOpening](#.AddUpcomingOpening)
    - [ApplicationMetadata](#.ApplicationMetadata)
    - [OpeningMetadata](#.OpeningMetadata)
    - [OpeningMetadata.ApplicationFormQuestion](#.OpeningMetadata.ApplicationFormQuestion)
    - [RemoveUpcomingOpening](#.RemoveUpcomingOpening)
    - [SetGroupMetadata](#.SetGroupMetadata)
    - [UpcomingOpeningMetadata](#.UpcomingOpeningMetadata)
    - [WorkingGroupMetadata](#.WorkingGroupMetadata)
    - [WorkingGroupMetadataAction](#.WorkingGroupMetadataAction)
  
    - [OpeningMetadata.ApplicationFormQuestion.InputType](#.OpeningMetadata.ApplicationFormQuestion.InputType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="proto/Channel.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Channel.proto



<a name=".ChannelCategoryMetadata"></a>

### ChannelCategoryMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional | Category Name |






<a name=".ChannelMetadata"></a>

### ChannelMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional | Channel Title |
| description | [string](#string) | optional | Channel Description |
| is_public | [bool](#bool) | optional | Wether to display channel to the public |
| language | [string](#string) | optional | ISO_639-1 Language [Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) |
| cover_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| avatar_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| category | [uint64](#uint64) | optional | Channel Category Id |





 

 

 

 



<a name="proto/Council.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Council.proto



<a name=".CouncilCandidacyNoteMetadata"></a>

### CouncilCandidacyNoteMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [string](#string) | optional | Candidacy header text |
| bullet_points | [string](#string) | repeated | Candidate program in form of bullet points |
| banner_image_uri | [string](#string) | optional | Image uri of candidate&#39;s banner |
| description | [string](#string) | optional | Candidacy description (md-formatted) |





 

 

 

 



<a name="proto/Forum.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Forum.proto



<a name=".ForumPostMetadata"></a>

### ForumPostMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) | optional | Post text content (md-formatted) |
| repliesTo | [uint32](#uint32) | optional | Id of the post that given post replies to (if any) |






<a name=".ForumPostReaction"></a>

### ForumPostReaction
The enum must be wrapped inside &#34;message&#34;, otherwide it breaks protobufjs






<a name=".ForumThreadMetadata"></a>

### ForumThreadMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional | Thread title |
| tags | [string](#string) | repeated | Tags accociated with the thread. Any update overrides all current tags. Only the first {MAX_TAGS_PER_FORUM_THREAD} (const exposed via @joystream/metadata-protobuf/consts) tags are taken into account. In order to unset current tags, [&#39;&#39;] (array with empty string) must be provided as value. |





 


<a name=".ForumPostReaction.Reaction"></a>

### ForumPostReaction.Reaction


| Name | Number | Description |
| ---- | ------ | ----------- |
| CANCEL | 0 | This means cancelling any previous reaction |
| LIKE | 1 |  |


 

 

 



<a name="proto/Membership.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Membership.proto



<a name=".MembershipMetadata"></a>

### MembershipMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional | Member&#39;s real name |
| avatar | [uint32](#uint32) | optional | Member&#39;s avatar - index into external [assets array](#.Assets) |
| about | [string](#string) | optional | Member&#39;s md-formatted about text |





 

 

 

 



<a name="proto/Person.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Person.proto



<a name=".PersonMetadata"></a>

### PersonMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| first_name | [string](#string) | optional |  |
| middle_name | [string](#string) | optional |  |
| last_name | [string](#string) | optional |  |
| about | [string](#string) | optional |  |
| cover_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| avatar_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |





 

 

 

 



<a name="proto/Playlist.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Playlist.proto



<a name=".PlaylistMetadata"></a>

### PlaylistMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional |  |
| videos | [uint64](#uint64) | repeated | Videos in the playlist |





 

 

 

 



<a name="proto/Series.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Series.proto



<a name=".SeasonMetadata"></a>

### SeasonMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| cover_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| persons | [uint64](#uint64) | repeated | Person(s) referenced by PersonId involved in this Season |






<a name=".SeriesMetadata"></a>

### SeriesMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| cover_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| persons | [uint64](#uint64) | repeated | Person(s) referenced by PersonId involved in this Series |





 

 

 

 



<a name="proto/Video.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/Video.proto



<a name=".License"></a>

### License
License types defined by Joystream


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) | optional | License code defined by Joystream. [reference](../src/KnownLicenses.json) |
| attribution | [string](#string) | optional | Text for licenses that require an attribution |
| custom_text | [string](#string) | optional | Text for custom license type |






<a name=".MediaType"></a>

### MediaType
Codec, Container, MIME media-type information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| codec_name | [string](#string) | optional | Codec corresponding to `name` field from [FFmpeg](https://github.com/FFmpeg/FFmpeg/blob/master/libavcodec/codec_desc.c) |
| container | [string](#string) | optional | Video container format, eg. &#39;MP4&#39;, &#39;WebM&#39;, &#39;Ogg&#39; [ref](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs) |
| mime_media_type | [string](#string) | optional | MIME Media Type, eg. &#39;video/mp4&#39; [ref](https://www.iana.org/assignments/media-types/media-types.xhtml#video) |






<a name=".PublishedBeforeJoystream"></a>

### PublishedBeforeJoystream
Publication status before joystream


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_published | [bool](#bool) | optional | Was video published before joystream platform |
| date | [string](#string) | optional | Date of publication: &#39;YYYY-MM-DD&#39; [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) |






<a name=".VideoCategoryMetadata"></a>

### VideoCategoryMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional | Category name |






<a name=".VideoMetadata"></a>

### VideoMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) | optional | Video Title |
| description | [string](#string) | optional | Video Description |
| video | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| thumbnail_photo | [uint32](#uint32) | optional | index into external [assets array](#.Assets) |
| duration | [uint32](#uint32) | optional | Lengths of video in seconds |
| media_pixel_height | [uint32](#uint32) | optional | Resolution of the video (Height) |
| media_pixel_width | [uint32](#uint32) | optional | Resolution of the video (Width) |
| media_type | [MediaType](#MediaType) | optional | Encoding and Container format used |
| language | [string](#string) | optional | ISO_639-1 Language [Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) |
| license | [License](#License) | optional | License type for the media |
| published_before_joystream | [PublishedBeforeJoystream](#PublishedBeforeJoystream) | optional | Date of publication |
| has_marketing | [bool](#bool) | optional | Does video have marketing or advertising in the stream |
| is_public | [bool](#bool) | optional | Should video be publicy visible yet |
| is_explicit | [bool](#bool) | optional | Does Video have explicit language or scenes |
| persons | [uint64](#uint64) | repeated | Person(s) referenced by PersonId involved in this video |
| category | [uint64](#uint64) | optional | Video Category Id |





 

 

 

 



<a name="proto/WorkingGroups.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/WorkingGroups.proto



<a name=".AddUpcomingOpening"></a>

### AddUpcomingOpening



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [UpcomingOpeningMetadata](#UpcomingOpeningMetadata) | optional | Upcoming opening metadata |






<a name=".ApplicationMetadata"></a>

### ApplicationMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| answers | [string](#string) | repeated | List of answers to opening application form questions |






<a name=".OpeningMetadata"></a>

### OpeningMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| short_description | [string](#string) | optional | Short description of the opening |
| description | [string](#string) | optional | Full description of the opening |
| hiring_limit | [uint32](#uint32) | optional | Expected number of hired applicants |
| expected_ending_timestamp | [uint32](#uint32) | optional | Expected time when the opening will close (Unix timestamp) |
| application_details | [string](#string) | optional | Md-formatted text explaining the application process |
| application_form_questions | [OpeningMetadata.ApplicationFormQuestion](#OpeningMetadata.ApplicationFormQuestion) | repeated | List of questions that should be answered during application |






<a name=".OpeningMetadata.ApplicationFormQuestion"></a>

### OpeningMetadata.ApplicationFormQuestion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| question | [string](#string) | optional | The question itself (ie. &#34;What is your name?&#34;&#34;) |
| type | [OpeningMetadata.ApplicationFormQuestion.InputType](#OpeningMetadata.ApplicationFormQuestion.InputType) | optional | Suggested type of the UI answer input |






<a name=".RemoveUpcomingOpening"></a>

### RemoveUpcomingOpening



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | Upcoming opening query-node id |






<a name=".SetGroupMetadata"></a>

### SetGroupMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_metadata | [WorkingGroupMetadata](#WorkingGroupMetadata) | optional | New working group metadata to set (can be a partial update) |






<a name=".UpcomingOpeningMetadata"></a>

### UpcomingOpeningMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| expected_start | [uint32](#uint32) | optional | Expected opening start (timestamp) |
| reward_per_block | [uint64](#uint64) | optional | Expected reward per block |
| min_application_stake | [uint64](#uint64) | optional | Expected min. application stake |
| metadata | [OpeningMetadata](#OpeningMetadata) | optional | Opening metadata |






<a name=".WorkingGroupMetadata"></a>

### WorkingGroupMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) | optional | Group description text (md-formatted) |
| about | [string](#string) | optional | Group about text (md-formatted) |
| status | [string](#string) | optional | Current group status (expected to be 1-3 words) |
| status_message | [string](#string) | optional | Short status message associated with the status |






<a name=".WorkingGroupMetadataAction"></a>

### WorkingGroupMetadataAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| set_group_metadata | [SetGroupMetadata](#SetGroupMetadata) | optional |  |
| add_upcoming_opening | [AddUpcomingOpening](#AddUpcomingOpening) | optional |  |
| remove_upcoming_opening | [RemoveUpcomingOpening](#RemoveUpcomingOpening) | optional |  |





 


<a name=".OpeningMetadata.ApplicationFormQuestion.InputType"></a>

### OpeningMetadata.ApplicationFormQuestion.InputType


| Name | Number | Description |
| ---- | ------ | ----------- |
| TEXTAREA | 0 |  |
| TEXT | 1 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

<!-- 
    This extra documentation will be appended to the generated docs.
-->

## Referencing Assets
<a name=".Assets"></a>

Applications that process messages that contain a `uint32` field that references an asset such as a cover photo or video, should interpret this value as a zero based index into an array/vector that is received external (out of band) to the protobuf message.

Example in context of query-node processing the runtime event `VideoCreated`

```rust
// Runtime event associated with creating a Video
VideoCreated(video_id: VideoId, video: Video, assets: Vec<NewAsset>, params: VideoCreationParameters)

struct VideoCreationParameters {
  in_category: VideoCategoryId,
  // binary serialized VideoMetadata protobuf message
  meta: Vec<u8>,
}

// suppose assets is a vector of two elements. This is the "out of band" array being referenced by the VideoMetadata message
assets = [
    NewAsset::Uri("https://mydomain.net/thumbnail.png"),
    NewAsset::Upload({
       content_id,
       ipfs_hash,
       size,
       ...
    }),
];

meta = VideoMetadata {
    ...
    // refers to second element: assets[1] which is being uploaded to the storage system
    video: 1,
    // refers to the first element assets[0] which is being referneced by a url string.
    thumbnail_photo: 0,
    ...
};
```