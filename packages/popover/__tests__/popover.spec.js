import { getCollisions } from "../src"

describe("<Popover />", () => {
  describe("getCollisions", () => {
    const popoverBounds = {
      width: 20,
      height: 80,
    }
    const container = {
      clientWidth: 1000,
      clientHeight: 1000,
    }
    const targetBounds = {
      width: 15,
      height: 10,
    }

    it("does not collide", () => {
      expect(
        getCollisions({
          targetBounds: {
            top: popoverBounds.height,
            right: popoverBounds.width + targetBounds.width,
            bottom: popoverBounds.height + targetBounds.height,
            left: popoverBounds.width,
          },
          popoverBounds,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: false, top: false })
    })

    it("collides with top side", () => {
      expect(
        getCollisions({
          targetBounds: {
            top: popoverBounds.height - 1,
            right: popoverBounds.width + targetBounds.width,
            bottom: popoverBounds.height + targetBounds.height - 1,
            left: popoverBounds.width,
          },
          popoverBounds,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: false, top: true })
    })

    it("collides with right side", () => {
      expect(
        getCollisions({
          targetBounds: {
            top: popoverBounds.height,
            right:
              container.clientWidth -
              popoverBounds.width +
              targetBounds.width +
              1,
            bottom: popoverBounds.height + targetBounds.height,
            left: container.clientWidth - popoverBounds.width + 1,
          },
          popoverBounds,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: true, top: false })
    })

    it("collides with bottom side", () => {
      expect(
        getCollisions({
          targetBounds: {
            top:
              container.clientHeight -
              popoverBounds.height -
              targetBounds.height +
              1,
            right: popoverBounds.width + targetBounds.width,
            bottom: container.clientHeight - popoverBounds.height + 1,
            left: popoverBounds.width,
          },
          popoverBounds,
          container,
        })
      ).toEqual({ bottom: true, left: false, right: false, top: false })
    })

    it("collides with left side", () => {
      expect(
        getCollisions({
          targetBounds: {
            top: popoverBounds.height,
            right: popoverBounds.width - 1,
            bottom: popoverBounds.height + targetBounds.height,
            left: popoverBounds.width - targetBounds.width - 1,
          },
          popoverBounds,
          container,
        })
      ).toEqual({ bottom: false, left: true, right: false, top: false })
    })
  })
})
