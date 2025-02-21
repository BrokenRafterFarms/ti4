/**
 * Calculate offsets of the tiles in relation to Mecatol Rex (the center tile). This information
 * is stored in an array of two value arrays. The two value arrays reperesent the margin left
 * and margin top to offset the tile (based on size of of tiles).
 * @param width The width (in pixels) of a single tile
 * @param height The height (in pixels) of a single tile
 * @returns {(number[]|(number)[])[]} an array of two value arrays.
 */
export const calculateOffsets = (width, height) => {
    let leftWidth = -width
    let topHeight = -height
    let halfWidth = Math.ceil(leftWidth * 0.5)
    let halfHeight = Math.ceil(topHeight * 0.5)
    let treQuarWidth = Math.ceil(leftWidth * 0.75)
    let toplevel = halfHeight + Math.ceil(topHeight * 0)
    let midlevel = halfHeight - Math.ceil(topHeight *6 )
    let bottomlevel = halfHeight - Math.ceil(topHeight * 12)
    let sidelevel = halfWidth - Math.ceil((leftWidth+halfWidth)*3)

    return [
        [halfWidth, midlevel],  // Mecatol Rex Main Level
        // Inner ring starting with tile 1
        [halfWidth, midlevel + topHeight],
        [halfWidth - treQuarWidth, midlevel + halfHeight],
        [halfWidth - treQuarWidth, midlevel - halfHeight],
        [halfWidth, midlevel - topHeight],
        [halfWidth + treQuarWidth, midlevel - halfHeight],
        [halfWidth + treQuarWidth, midlevel + halfHeight],
        // Middle ring starting with tile 7
        [halfWidth, midlevel + topHeight + topHeight],
        [halfWidth - treQuarWidth, midlevel + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, midlevel + topHeight],
        [halfWidth - leftWidth - halfWidth, midlevel],
        [halfWidth - leftWidth - halfWidth, midlevel - topHeight],
        [halfWidth - treQuarWidth, midlevel - topHeight - halfHeight],
        [halfWidth, midlevel - topHeight - topHeight],
        [halfWidth + treQuarWidth, midlevel - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, midlevel - topHeight],
        [halfWidth + leftWidth + halfWidth, midlevel],
        [halfWidth + leftWidth + halfWidth, midlevel + topHeight],
        [halfWidth + treQuarWidth, midlevel + topHeight + halfHeight],

        // Center of top level starting with tile 19
        [halfWidth, toplevel],
        // Inner ring starting with tile 20
        [halfWidth, toplevel + topHeight],
        [halfWidth - treQuarWidth, toplevel + halfHeight],
        [halfWidth - treQuarWidth, toplevel - halfHeight],
        [halfWidth, toplevel - topHeight],
        [halfWidth + treQuarWidth, toplevel - halfHeight],
        [halfWidth + treQuarWidth, toplevel + halfHeight],
        // Middle ring starting with tile 26
        [halfWidth, toplevel + topHeight + topHeight],
        [halfWidth - treQuarWidth, toplevel + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, toplevel + topHeight],
        [halfWidth - leftWidth - halfWidth, toplevel],
        [halfWidth - leftWidth - halfWidth, toplevel - topHeight],
        [halfWidth - treQuarWidth, toplevel - topHeight - halfHeight],
        [halfWidth, toplevel - topHeight - topHeight],
        [halfWidth + treQuarWidth, toplevel - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, toplevel - topHeight],
        [halfWidth + leftWidth + halfWidth, toplevel],
        [halfWidth + leftWidth + halfWidth, toplevel + topHeight],
        [halfWidth + treQuarWidth, toplevel + topHeight + halfHeight],


        // Center of bottom level starting with tile 38
        [halfWidth, bottomlevel],
        // Inner ring starting with tile 39
        [halfWidth, bottomlevel + topHeight],
        [halfWidth - treQuarWidth, bottomlevel + halfHeight],
        [halfWidth - treQuarWidth, bottomlevel - halfHeight],
        [halfWidth, bottomlevel - topHeight],
        [halfWidth + treQuarWidth, bottomlevel - halfHeight],
        [halfWidth + treQuarWidth, bottomlevel + halfHeight],
        // Middle ring starting with tile 45
        [halfWidth, bottomlevel + topHeight + topHeight],
        [halfWidth - treQuarWidth, bottomlevel + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, bottomlevel + topHeight],
        [halfWidth - leftWidth - halfWidth, bottomlevel],
        [halfWidth - leftWidth - halfWidth, bottomlevel - topHeight],
        [halfWidth - treQuarWidth, bottomlevel - topHeight - halfHeight],
        [halfWidth, bottomlevel - topHeight - topHeight],
        [halfWidth + treQuarWidth, bottomlevel - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, bottomlevel - topHeight],
        [halfWidth + leftWidth + halfWidth, bottomlevel],
        [halfWidth + leftWidth + halfWidth, bottomlevel + topHeight],
        [halfWidth + treQuarWidth, bottomlevel + topHeight + halfHeight],

        // Center of Side tiles starting with tile 57
        [sidelevel, midlevel],
        // Inner ring starting with tile 58
        [sidelevel, midlevel + topHeight],
        [sidelevel - treQuarWidth, midlevel + halfHeight],
        [sidelevel - treQuarWidth, midlevel - halfHeight],
        [sidelevel, midlevel - topHeight],
    ]
}
