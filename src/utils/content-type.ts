export enum ContentType {
    // Tipos de texto
    TEXT_PLAIN = "text/plain",
    TEXT_HTML = "text/html",
    TEXT_CSS = "text/css",
    TEXT_JAVASCRIPT = "text/javascript",

    // Tipos de aplicação
    JSON = "application/json",
    XML = "application/xml",
    XHTML = "application/xhtml+xml",
    PDF = "application/pdf",
    ZIP = "application/zip",
    GZIP = "application/gzip",
    TAR = "application/x-tar",
    RAR = "application/vnd.rar",
    SEVEN_ZIP = "application/x-7z-compressed",
    MSWORD = "application/msword",
    EXCEL = "application/vnd.ms-excel",
    POWERPOINT = "application/vnd.ms-powerpoint",
    OPEN_DOCUMENT_TEXT = "application/vnd.oasis.opendocument.text",
    OPEN_DOCUMENT_SPREADSHEET = "application/vnd.oasis.opendocument.spreadsheet",
    OPEN_DOCUMENT_PRESENTATION = "application/vnd.oasis.opendocument.presentation",
    OCTET_STREAM = "application/octet-stream",

    // Tipos de imagem
    IMAGE_JPEG = "image/jpeg",
    IMAGE_PNG = "image/png",
    IMAGE_GIF = "image/gif",
    IMAGE_BMP = "image/bmp",
    IMAGE_WEBP = "image/webp",
    IMAGE_SVG = "image/svg+xml",
    IMAGE_TIFF = "image/tiff",

    // Tipos de áudio
    AUDIO_MPEG = "audio/mpeg",
    AUDIO_OGG = "audio/ogg",
    AUDIO_WAV = "audio/wav",
    AUDIO_AAC = "audio/aac",

    // Tipos de vídeo
    VIDEO_MP4 = "video/mp4",
    VIDEO_MPEG = "video/mpeg",
    VIDEO_WEBM = "video/webm",
    VIDEO_OGG = "video/ogg",
    VIDEO_AVI = "video/x-msvideo",

    // Tipos multipart
    MULTIPART_FORM_DATA = "multipart/form-data",
    MULTIPART_BYTERANGES = "multipart/byteranges",

    // Outros
    FORM_URLENCODED = "application/x-www-form-urlencoded"
}
