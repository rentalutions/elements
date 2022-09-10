import { getCollisions } from "../src"

describe("<Popover />", () => {
  describe("getCollisions", () => {
    const popover = {
      width: 20,
      height: 80,
    }
    const container = {
      width: 1000,
      height: 1000,
    }
    const target = {
      width: 15,
      height: 10,
    }

    it("does not collide", () => {
      expect(
        getCollisions({
          target: {
            top: popover.height,
            right: popover.width + target.width,
            bottom: popover.height + target.height,
            left: popover.width,
          },
          popover,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: false, top: false })
    })

    it("collides with top side", () => {
      expect(
        getCollisions({
          target: {
            top: popover.height - 1,
            right: popover.width + target.width,
            bottom: popover.height + target.height - 1,
            left: popover.width,
          },
          popover,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: false, top: true })
    })

    it("collides with right side", () => {
      expect(
        getCollisions({
          target: {
            top: popover.height,
            right: container.width - popover.width + target.width + 1,
            bottom: popover.height + target.height,
            left: container.width - popover.width + 1,
          },
          popover,
          container,
        })
      ).toEqual({ bottom: false, left: false, right: true, top: false })
    })

    it("collides with bottom side", () => {
      expect(
        getCollisions({
          target: {
            top: container.height - popover.height - target.height + 1,
            right: popover.width + target.width,
            bottom: container.height - popover.height + 1,
            left: popover.width,
          },
          popover,
          container,
        })
      ).toEqual({ bottom: true, left: false, right: false, top: false })
    })

    it("collides with left side", () => {
      expect(
        getCollisions({
          target: {
            top: popover.height,
            right: popover.width - 1,
            bottom: popover.height + target.height,
            left: popover.width - target.width - 1,
          },
          popover,
          container,
        })
      ).toEqual({ bottom: false, left: true, right: false, top: false })
    })
  })
})
